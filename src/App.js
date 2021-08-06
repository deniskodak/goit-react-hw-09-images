import React, { Component } from "react";

import ApiService from "./components/ApiService";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ButtonLoadMore from "./components/Button";
import ContainerWithLoader from "./components/Loader";
import Modal from "./components/Modal";

import { GlobalStyles, Section } from "./styled";

class App extends Component {
  state = {
    imagesData: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    isModal: false,
    largeImg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
    if (prevState.imagesData.length > 12 && !this.state.largeImg) {
    }
  }

  getImages = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    try {
      const { hits } = await ApiService(searchQuery, page);
      await this.setState(({ imagesData, page }) => ({
        imagesData: [...imagesData, ...hits],
        page: page + 1,
      }));

      if (page > 1) {
        this.toSctroll();
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = (keyword) => {
    this.setState({
      searchQuery: keyword,
      page: 1,
      imagesData: [],
      error: null,
    });
  };

  onClick = () => {
    this.getImages();
  };

  toSctroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = (check) => {
    check
      ? this.setState((prevState) => ({
          isModal: !prevState.isModal,
        }))
      : this.setState((prevState) => ({
          isModal: !prevState.isModal,
          largeImg: "",
        }));
  };

  getLargeImage = (e) => {
    this.setState({ largeImg: e.target.dataset.src });

    this.toggleModal("check");
  };

  render() {
    const { imagesData, loading, error, isModal, largeImg } = this.state;
    const shouldRenderLoadMoreBtn = imagesData.length > 0 && !loading;
    return (
      <>
        <GlobalStyles />
        {isModal && <Modal onClose={this.toggleModal} largeImg={largeImg} />}
        <Section>
          <Searchbar onSubmit={this.handleSubmit} />
          {error && <h2>{error}</h2>}
          <ImageGallery images={imagesData} getLargeImg={this.getLargeImage} />
          {loading && <ContainerWithLoader />}
          {shouldRenderLoadMoreBtn && (
            <ButtonLoadMore onIncrement={this.onClick} />
          )}
        </Section>
      </>
    );
  }
}
export default App;
