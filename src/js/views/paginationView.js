import icons from '../../img/icons.svg';
import View from './view';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHanderClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    let getPrevButton = false,
      getNextButton = false;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // page 1 and there are other pages
    if (currentPage === 1 && numPages > 1) {
      getNextButton = true;
      return this._getButtonHTML(getPrevButton, getNextButton, currentPage);
    }
    // last page
    if (currentPage === numPages && numPages > 1) {
      getPrevButton = true;
      return this._getButtonHTML(getPrevButton, getNextButton, currentPage);
    }
    //  other pages
    if (currentPage < numPages) {
      getPrevButton = true;
      getNextButton = true;
      return this._getButtonHTML(getPrevButton, getNextButton, currentPage);
    }
    // Page 1 and there are no other pages
    return '';
  }
  _getPrevButton(currentPage) {
    return `
        <button data-goto="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
    `;
  }
  _getNextButton(currentPage) {
    return `   
        <button data-goto="${
          currentPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
  }
  _getButtonHTML(prevButton, nextButton, currentPage) {
    let html = '';
    if (!prevButton && !nextButton) return html;
    if (prevButton) html += this._getPrevButton(currentPage);
    if (nextButton) html += this._getNextButton(currentPage);
    return html;
  }
}

export default new PaginationView();
