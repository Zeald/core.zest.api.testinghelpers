const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const { notDefined, pickRandom, isEqual } = require('../../helpers/functions');
const { Page } = require('./Page');

/**
 * Super Category Page class
 *
 */
class SuperCategoryPage extends Page {
	/**
	 * Constructor
	 *
	 * @param webdriver Selenium web driver.
	 * @param url The url of the page.
	 * @param catViewLocator The category view locator.
	 * @param productLinkLocator The product view locator.
	 * @param filterGroupLocator The locator for filter groups.
	 * @param filtersLocator The locator for filter items.
	 * @param showFiltersLocator The locator for show filters.
	 * @param closeFiltersButtonLocator The locator for close button of filters.
	 * @param nextPageLocator The next page locator.
	 * @param loadPageDropDownLocator The category load page locator.
	 * @param pageLoaderLocator The page loader / spinner locator.
	 * @param pagesLocator The pages item locator.
	 * @param productSortingLocator The locator for sorting of products.
	 * @param productContainerLocator The locator for each container of the product.
	 * @param productSelectOptionsLocator The locator for select options button for each product.
	 * @param productAddToCartLocator The locator for add to cart for each product.
	 * @param productItemTitleLocator The locator for the product title inside each product container.
	 * @param popupCartLocator The locator for the popup cart.
	 * @param popupProductItemTitleLocator The locator for the product title inside the popup cart.
	 * @param addToFavouritesLocator The locator of add product to favourites.
	 * @param favouritesPageButtonLocator The locator of favourites page locator
	 */
	constructor(webdriver, url, catViewLocator, productLinkLocator, filterGroupLocator, filtersLocator,
				showFiltersLocator, closeFiltersButtonLocator, nextPageLocator, loadPageDropDownLocator,
				pageLoaderLocator, pagesLocator, productSortingLocator, productContainerLocator,
				productSelectOptionsLocator, productAddToCartLocator, productItemTitleLocator, popupCartLocator,
				popupProductItemTitleLocator, addToFavouritesLocator, favouritesPageButtonLocator) {
		super(webdriver, url);

		// initialize locators if not defined
		this._catViewLocator = notDefined(catViewLocator) ?
			By.css('div.catview') : catViewLocator;
		this._productLinkLocator = notDefined(productLinkLocator) ?
			By.css('.product-collection .product-card a') : productLinkLocator;
		this._filterGroupLocator = notDefined(filterGroupLocator) ?
			By.css('.filter-collection > .filter-group') : filterGroupLocator;
		this._filtersLocator = notDefined(filtersLocator) ?
			By.css('ul > li:not(.empty).filter') : filtersLocator;
		this._showFiltersLocator = notDefined(showFiltersLocator) ?
			By.css('.top-filters .show-filters') : showFiltersLocator;
		this._closeFiltersButtonLocator = notDefined(closeFiltersButtonLocator) ?
			By.xpath("//*[@class='pop-overlay-inner pop-left']//*[@class='close'][contains(text(),'Close')]") :
			closeFiltersButtonLocator;
		this._nextPageLocator = notDefined(nextPageLocator) ?
			By.css('.load-next') : nextPageLocator;
		this._loadPageDropDownLocator = notDefined(loadPageDropDownLocator) ?
			By.css('.load-page.drop-select') : loadPageDropDownLocator;
		this._pageLoaderLocator = notDefined(pageLoaderLocator) ?
			By.css('.loading-overlay') : pageLoaderLocator;
		this._pagesLocator = notDefined(pagesLocator) ?
			By.css('ul > li') : pagesLocator;
		this._productSortingLocator = notDefined(productSortingLocator) ?
			By.css(".sort > select[name='item_sort_by'].sort-by") : productSortingLocator;
		this._productContainerLocator = notDefined(productContainerLocator) ?
			By.css('.product-card') : productContainerLocator;
		this._productSelectOptionsLocator = notDefined(productSelectOptionsLocator) ?
			By.css('.select-options') : productSelectOptionsLocator;
		this._productAddToCartLocator = notDefined(productAddToCartLocator) ?
			By.css('.add-to-cart') : productAddToCartLocator;
		this._productItemTitleLocator = notDefined(productItemTitleLocator) ?
			By.css('.item-title') : productItemTitleLocator;
		this._popupCartLocator = notDefined(popupCartLocator) ?
			By.css('.popup-cart') : popupCartLocator;
		this._popupProductItemTitleLocator = notDefined(popupProductItemTitleLocator) ?
			By.css('.product-title') : popupProductItemTitleLocator;
		this._addToFavouritesLocator = notDefined(popupProductItemTitleLocator) ?
			By.css('.add-favourite:not(.selected)') : popupProductItemTitleLocator;
		this._favouritesPageButtonLocator = notDefined(favouritesPageButtonLocator) ?
			By.css('.view-favourites') : favouritesPageButtonLocator;
	}

	/**
	 * Set category view locator
	 *
	 * @param value Locator
	 */
	set catViewLocator(value) {
		this._catViewLocator = value;
	}

	/**
	 * Set product link locator
	 *
	 * @param value Locator
	 */
	set productLinkLocator(value) {
		this._productLinkLocator = value;
	}

	/**
	 * Set filter group locator
	 *
	 * @param value Locator
	 */
	set filterGroupLocator(value) {
		this._filterGroupLocator = value;
	}

	/**
	 * Set filters locator
	 *
	 * @param value Locator
	 */
	set filtersLocator(value) {
		this._filtersLocator = value;
	}

	/**
	 * Set show filters locator
	 *
	 * @param value Locator
	 */
	set showFiltersLocator(value) {
		this._showFiltersLocator = value;
	}

	/**
	 * Set close filters button locator
	 *
	 * @param value Locator
	 */
	set closeFiltersButtonLocator(value) {
		this._closeFiltersButtonLocator = value;
	}

	/**
	 * Set next page locator
	 *
	 * @param value Locator
	 */
	set nextPageLocator(value) {
		this._nextPageLocator = value;
	}

	/**
	 * Set load page dropdown locator
	 *
	 * @param value Locator
	 */
	set loadPageDropDownLocator(value) {
		this._loadPageDropDownLocator = value;
	}

	/**
	 * Set page loader / spinner locator
	 *
	 * @param value Locator
	 */
	set pageLoaderLocator(value) {
		this._pageLoaderLocator = value;
	}

	/**
	 * Set pages item locator
	 *
	 * @param value Locator
	 */
	set pagesLocator(value) {
		this._pagesLocator = value;
	}

	/**
	 * Set product sorting locator
	 *
	 * @param value Locator
	 */
	set productSortingLocator(value) {
		this._productSortingLocator = value;
	}

	/**
	 * Set product container locator
	 *
	 * @param value Locator
	 */
	set productContainerLocator(value) {
		this._productContainerLocator = value;
	}

	/**
	 * Set product select options locator
	 *
	 * @param value Locator
	 */
	set productSelectOptionsLocator(value) {
		this._productSelectOptionsLocator = value;
	}

	/**
	 * Set product add to cart locator
	 *
	 * @param value Locator
	 */
	set productAddToCartLocator(value) {
		this._productAddToCartLocator = value;
	}

	/**
	 * Set product item title locator
	 *
	 * @param value Locator
	 */
	set productItemTitleLocator(value) {
		this._productItemTitleLocator = value;
	}

	/**
	 * Set popup cart locator
	 *
	 * @param value Locator
	 */
	set popupCartLocator(value) {
		this._popupCartLocator = value;
	}

	/**
	 * Set popup product item title locator
	 *
	 * @param value Locator
	 */
	set popupProductItemTitleLocator(value) {
		this._popupProductItemTitleLocator = value;
	}

	/**
	 * Set add to favourites locator
	 *
	 * @param value Locator
	 */
	set addToFavouritesLocator(value) {
		this._addToFavouritesLocator = value;
	}

	/**
	 * Set favourites page button locator
	 *
	 * @param value Locator
	 */
	set favouritesPageButtonLocator(value) {
		this._favouritesPageButtonLocator = value;
	}

	/**
	 * Get the product url
	 *
	 * @returns {Promise<any[]|*>}
	 */
	async getProductURLs() {
		// locate the cat view
		const catView = await this._driver.findElement(this._catViewLocator);
		// wait a bit until it is visible
		await this._driver.wait(until.elementIsVisible(catView), 2000);
		// get product links
		let productURLs = await catView.findElements(this._productLinkLocator);

		if (productURLs.length === 0) {
			// use the zest 3 selectors
			productURLs = await catView.findElements(By.css('.item-list .item-cell a'));
		}

		this.productURLs = await this.resolveURLs(productURLs).then((urls) => urls);
		return await this.productURLs;
	}

	/**
	 * Get the product containers
	 *
	 * @returns {Promise<*|Array>}
	 */
	async getProductContainers() {
		// wait a 10 seconds until the containers can be located
		await this._driver.wait(until.elementLocated(this._productContainerLocator), 10000);
		// get the containers
		return await this._driver.findElements(this._productContainerLocator);
	}

	/**
	 * Get product containers that has options.
	 *
	 * @returns {Promise<Array>}
	 */
	async getProductContainersWithOptions() {
		const containers = await this.getProductContainers();
		const promises = [];

		await containers.forEach((container) => {
			promises.push(container.findElement(this._productSelectOptionsLocator)
				.then((element) => element)
				.catch((err) => {
					// Possibly that the product has no options.
					return null;
				}));
		});

		const optionButtons = await Promise.all(promises).then((optionButtons) => optionButtons);

		// extract all product container that has options.
		const containerWithOptions = [];
		await optionButtons.forEach((button, index) => {
			if (!notDefined(button)) {
				containerWithOptions.push(containers[index]);
			}
		});

		return await containerWithOptions;
	}

	/**
	 * Get product containers that don't have options.
	 *
	 * @returns {Promise<Array>}
	 */
	async getProductContainersWithNoOptions() {
		const containers = await this.getProductContainers();
		const promises = [];

		await containers.forEach((container) => {
			promises.push(container.findElement(this._productSelectOptionsLocator)
				.then((element) => element)
				.catch((err) => {
					// Possibly that the product has no options.
					return null;
				}));
		});

		const optionButtons = await Promise.all(promises).then((optionButtons) => optionButtons);

		// extract all product container that has options.
		const containerWithOptions = [];
		await optionButtons.forEach((button, index) => {
			if (notDefined(button)) {
				containerWithOptions.push(containers[index]);
			}
		});

		return containerWithOptions;
	}

	/**
	 * Get the product titles
	 *
	 * @param containers Product container elements.
	 * @returns {Promise<[any, any, any, any, any, any, any, any, any, any]>}
	 */
	async getProductTitles(containers) {
		let productContainers = [];

		if (notDefined(containers)) {
			productContainers = await this.getProductContainers().then((containers) => containers);
		} else {
			productContainers = await containers;
		}

		const titlePromises = [];

		await productContainers.forEach((container) => {
			titlePromises.push(container.findElement(this._productItemTitleLocator).getText());
		});

		return await Promise.all(titlePromises);
	}

	/**
	 * Verify if products do exist in this certain category.
	 *
	 * @param categoryURL The URL of the category.
	 * @param assert This will dictate if need to execute assert rather returning the result.
	 * @returns {Promise<*>}
	 */
	async checkIfProductsExists(categoryURL, assert) {
		if (!notDefined(categoryURL)) {
			this._url = categoryURL;
			await this.open();
		}

		const productURLs = await this.getProductURLs().then((urls) => urls);

		const exists = productURLs && Array.isArray(productURLs) && productURLs.length > 0;

		if (assert) {
			return await expect(exists, 'Category products does not exist!').to.be.true;
		}

		return await exists;
	}

	/**
	 * Get all filter groups
	 *
	 * @returns {Promise<*|Array|{}|*[]>}
	 */
	async getFilterGroups() {
		return await this._driver.findElements(this._filterGroupLocator);
	}

	/**
	 * Apply a filter
	 *
	 * @param categoryURL The URL of the category.
	 * @param filterGroupIndex The index of a chosen filter group.
	 * @param filterIndex The index of a chosen filter within the filter group.
	 * @param expectedProductTitles The expected product titles
	 * @param assert This will dictate if need to execute assert rather returning the result.
	 * @returns {Promise<*>}
	 */
	async applyFilter(categoryURL, filterGroupIndex, filterIndex, expectedProductTitles, assert) {
		if (!notDefined(categoryURL)) {
			this._url = categoryURL;
			await this.open();
		}

		filterGroupIndex = notDefined(filterGroupIndex) ? 0 : filterGroupIndex;
		filterIndex = notDefined(filterIndex) ? 0 : filterIndex;

		// wait for ready state
		await this.waitReadyState();

		const filterGroups = await this.getFilterGroups().then((groups) => groups);

		// pick a filter group
		const filterGroup = await filterGroups[filterGroupIndex];
		const filterGroupDisplayed = await filterGroup.isDisplayed().then((displayed) => displayed);
		const showFilter = await this._driver.findElement(this._showFiltersLocator);

		await this._driver.wait(until.elementIsVisible(showFilter), 3000);

		if (!filterGroupDisplayed) {
			// use executor to click at this point since there are instances show filter is not clickable
			await this.executorClick(showFilter);
			await this.performSleep();
		}

		// pick a filter to click
		const filters = await filterGroup.findElements(this._filtersLocator).then((filters) => filters);
		const filter = await filters[filterIndex];

		// click and check
		await filter.click();
		await this.performSleep();

		const closeButton = await this._driver.findElement(this._closeFiltersButtonLocator);

		if (!filterGroupDisplayed) {
			// close the filter
			await closeButton.click();
			await this.performSleep();
		}

		await this.checkIfProductsExists();

		// check product titles
		const filterProductTitles = await this.getProductTitles().then((titles) => titles);
		const result = await isEqual(expectedProductTitles, filterProductTitles);

		// open filter and close uncheck
		if (!filterGroupDisplayed) {
			// use executor to click at this point since there are instances show filter is not clickable
			await this.executorClick(showFilter);
			await this.performSleep();
			await filter.click();
			await this.performSleep();
			// close the filter
			await this.executorClick(closeButton);
			await this.performSleep();
		}

		if (assert) {
			return await await expect(result, 'Filtered products did not match to expected!').to.be.true;
		}

		return await result;
	}

	/**
	 * Apply random product filter
	 *
	 * @param categoryURL The URL of the category.
	 * @returns {Promise<void>}
	 */
	async applyRandomProductFilter(categoryURL) {
		if (!notDefined(categoryURL)) {
			this._url = categoryURL;
			await this.open();
		}

		// wait for ready state
		await this.waitReadyState();

		const filterGroups = await this.getFilterGroups().then((groups) => groups);

		// pick a filter group
		const filterGroup = await pickRandom(...filterGroups);
		const filterGroupDisplayed = await filterGroup.isDisplayed().then((displayed) => displayed);
		const showFilter = await this._driver.findElement(this._showFiltersLocator);

		await this._driver.wait(until.elementIsVisible(showFilter), 3000);

		if (!filterGroupDisplayed) {
			// use executor to click at this point since there are instances show filter is not clickable
			await this.executorClick(showFilter);
			await this.performSleep();
		}

		// pick a filter to click
		const filters = await filterGroup.findElements(this._filtersLocator).then((filters) => filters);
		const filter = await pickRandom(...filters);

		// click and check
		await filter.click();
		await this.performSleep();

		const closeButton = await this._driver.findElement(this._closeFiltersButtonLocator);

		if (!filterGroupDisplayed) {
			// close the filter
			await closeButton.click();
			await this.performSleep();
		}

		await this.checkIfProductsExists();

		// open filter and close uncheck
		if (!filterGroupDisplayed) {
			// use executor to click at this point since there are instances show filter is not clickable
			await this.executorClick(showFilter);
			await this.performSleep();
			await filter.click();
			await this.performSleep();
			// close the filter
			await this.executorClick(closeButton);
			await this.performSleep();
		}

		return await filter;
	}

	/**
	 * Load the next page.
	 *
	 * @param categoryURL The URL of the category.
	 * @param expectedAddedProductTitles The expected product titles
	 * @param assert This will dictate if need to execute assert rather returning the result.
	 * @returns {Promise<*>}
	 */
	async goToNextPage(categoryURL, expectedAddedProductTitles, assert) {
		if (!notDefined(categoryURL)) {
			this._url = categoryURL;
			await this.open();
		}

		// wait for ready state
		await this.waitReadyState();
		await this.performSleep();

		// get the products before loading the next page
		await this.checkIfProductsExists();
		const originalTitles = await this.getProductTitles().then((titles) => titles);

		// get the next page button
		const isLoadNextPageExist = await this._driver.findElement(this._nextPageLocator).then((element) => {
			if (element) {
				return true;
			}
		}).catch((err) => {
			return false;
		});

		if (isLoadNextPageExist) {
			const loadNextPage = await this._driver.findElement(this._nextPageLocator);
			// scroll to the next page button
			await this.scrollTo(loadNextPage);
			await this.performSleep();

			// click load next page
			await loadNextPage.click();
			await this.performSleep();
		}

		// TODO: Needs to properly check if all products already loaded.
		await this.performSleep(5000);

		// get the new products list if there's any
		const nextPageProductTitles = await this.getProductTitles().then((titles) => titles);
		const subsetAdded = await expectedAddedProductTitles.every((val) => nextPageProductTitles.includes(val));
		const productsAdded = await originalTitles.length < nextPageProductTitles.length;

		// make sure that the expected additional items are loaded and that the total number has changed
		const result = await subsetAdded && productsAdded;

		if (assert) {
			return await await expect(result, 'Next page products did not match to expected!').to.be.true;
		}

		return await result;
	}

	/**
	 * Jump to a page page.
	 *
	 * @param categoryURL The URL of the category.
	 * @param pageIndex The index of the page.
	 * @param expectedTitles The expected list of titles.
	 * @param assert This will dictate if need to execute assert rather returning the result.
	 * @returns {Promise<void>}
	 */
	async jumpPage(categoryURL, pageIndex, expectedTitles, assert) {
		if (!notDefined(categoryURL)) {
			this._url = categoryURL;
			await this.open();
		}

		pageIndex = notDefined(pageIndex) ? 1 : pageIndex;

		// wait for ready state
		await this.waitReadyState();
		await this.performSleep();

		const pageSelector = await this._driver.findElement(this._loadPageDropDownLocator);
		await this.scrollTo(pageSelector);
		await this.performSleep();

		// click the page selector
		await pageSelector.click();
		await this.performSleep();

		// get all the pages under the drop down
		const pages = await pageSelector.findElements(this._pagesLocator).then((pages) => pages);
		// pick a random page to jump in
		const page = await pages[pageIndex];
		// click the page
		await page.click();

		await this.performSleep(5000);

		const currentTitles = await this.getProductTitles().then((titles) => titles);
		const result = isEqual(currentTitles, expectedTitles);

		if (assert) {
			return await expect(result, 'The page products did not match to expected!').to.be.true;
		}

		return await result;
	}

	/**
	 * Go to a random page.
	 *
	 * @param categoryURL The URL of the category.
	 * @returns {Promise<void>}
	 */
	async goToRandomPage(categoryURL) {
		if (!notDefined(categoryURL)) {
			this._url = categoryURL;
			await this.open();
		}

		// wait for ready state
		await this.waitReadyState();

		const pageSelector = await this._driver.findElement(this._loadPageDropDownLocator);
		await this.scrollTo(pageSelector);
		await this.performSleep();

		// click the page selector
		await pageSelector.click();
		await this.performSleep();

		// get all the pages under the drop down
		const pages = await pageSelector.findElements(this._pagesLocator).then((pages) => pages);
		// pick a random page to jump in
		const page = await pickRandom(...pages);
		// click the page
		await page.click();

		await this.performSleep();

		// verify if there are products
		await this.checkIfProductsExists();

		return await page;
	}

	/**
	 * Execute product sort.
	 *
	 * @param sortIndex Index of the sort option.
	 * @param categoryURL categoryURL The URL of the category.
	 * @param expectedTitleOrder The expected order of the product titles.
	 * @param assert This will dictate if need to execute assert rather returning the result.
	 * @returns {Promise<*>}
	 */
	async productSort(sortIndex, categoryURL, expectedTitleOrder, assert) {
		if (!notDefined(categoryURL)) {
			this._url = categoryURL;
			await this.open();
		}

		// wait for ready state
		await this.waitReadyState();

		sortIndex = notDefined(sortIndex) ? 0 : sortIndex;

		// get the original list of product titles in the current order.
		// const productTitlesOriginalOrder = await this.getProductTitles().then((titles) => titles);

		const productSortingSelect = await this._driver.findElement(this._productSortingLocator);
		// scroll tp the sorting dropdown
		await this.scrollTo(productSortingSelect);
		await this.performSleep();
		// click it
		await productSortingSelect.click();

		// get all the elements under it
		const options = await productSortingSelect.findElements(By.css('option')).then((options) => options);
		await this.performSleep(1000);
		// click the option
		await options[sortIndex].click();

		// put sleep here just to be sure that loader has gone away and products are loaded.
		// TODO: Needs to properly check if all products already loaded.
		await this.performSleep(6000);

		// check if there are still products
		await this.checkIfProductsExists();

		// get the original list of products in their new order
		const productTitlesNewOrder = await this.getProductTitles().then((titles) => titles);

		// compare if still exactly the same order
		const result = await isEqual(expectedTitleOrder, productTitlesNewOrder);

		if (assert) {
			return await expect(result, 'New ordered list did not match to the expected!').to.be.true;
		}

		return await result;
	}

	/**
	 * Add product to cart.
	 *
	 * @param productIndex Index of the product in the list.
	 * @param assert This will dictate if need to execute assert rather returning the result.
	 * @returns {Promise<*>}
	 */
	async addProductToCart(productIndex, assert) {
		let productContainer = null;
		const productContainers = await this.getProductContainers().then((containers) => containers);

		if (notDefined(productIndex)) {
			productContainer = await pickRandom(...productContainers);
		} else {
			productContainer = await productContainers[productIndex];
		}

		// scroll to this product
		await this.scrollTo(productContainer);

		const addToCartButton = await productContainer.findElement(this._productAddToCartLocator);
		const selectOptionsButton = await productContainer.findElement(this._productSelectOptionsLocator)
			.then((element) => element)
			.catch((err) => {
				// Possibly that the product has no options.
				return null;
			});

		// if add to cart is visible then click add to cart immediately
		const addToCartVisible = await addToCartButton.isDisplayed().then((displayed) => displayed);
		if (!addToCartVisible && !notDefined(selectOptionsButton)) {
			await this.hoverTo(productContainer);
			await this.executorClick(selectOptionsButton);
		}

		await this.executorClick(addToCartButton);
		await this.performSleep();

		// wait for the popup cart to show up
		const popupCart = await this._driver.findElement(this._popupCartLocator);
		await this._driver.wait(until.elementIsVisible(popupCart));

		// verify if the product is already in the cart using the product title
		const productTitle = await productContainer.findElement(this._productItemTitleLocator)
			.getText().then((text) => text);
		const popupProductTitles = await popupCart.findElements(this._popupProductItemTitleLocator);
		const titlePromises = [];

		await popupProductTitles.forEach((popupTitle) => {
			titlePromises.push(popupTitle.getText());
		});

		const popupTitles = await Promise.all(titlePromises).then((titles) => titles);

		const resultTitle = await popupTitles.find((title) => {
			return isEqual(productTitle.toUpperCase(), title);
		});

		// if null or not defined it means that the added product is not on the popup cart.
		const result = await !notDefined(resultTitle);

		if (assert) {
			return await expect(result, 'Product not in the cart!').to.be.true;
		}

		return await result;
	}

	/**
	 * Add a product to favourites.
	 *
	 * @param productIndex Index of the product in the list.
	 * @returns {Promise<T | boolean>}
	 */
	async addProductToFavourites(productIndex) {
		let productContainer = null;
		const productContainers = await this.getProductContainers().then((containers) => containers);

		if (notDefined(productIndex)) {
			productContainer = await pickRandom(...productContainers);
		} else {
			productContainer = await productContainers[productIndex];
		}

		// scroll to this product
		await this.scrollTo(productContainer);

		await productContainer.findElement(this._addToFavouritesLocator).then((button) => {
			return button.click();
		}).catch(() => {
			// do nothing this means that the button already clicked previously.
			return false;
		});

		return await productContainer;
	}

	/**
	 * Open favourites page.
	 *
	 * @returns {Promise<FavouritesPage>}
	 */
	async openFavourites() {
		await this._driver.findElement(this._favouritesPageButtonLocator).click();
		// instantiate favourites page.
		await this.waitReadyState();
		return await this._driver.getCurrentUrl().then((url) => url);
	}

	/**
	 * Resolve url promises to extract href attribute.
	 *
	 * @param urlPromises URL element promises
	 * @return {Promise<any[]>}
	 */
	async resolveURLs(urlPromises) {
		const promises = [];
		await urlPromises.forEach((element) => {
			promises.push(element.getAttribute('href'));
		});

		return await Promise.all(promises);
	}
}

module.exports.SuperCategoryPage = SuperCategoryPage;
