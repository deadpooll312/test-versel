// AUTH
export const login = '/account/login';
export const registerPath = '/account/register';
export const passwordReset = '/account/password/reset/';
export const passwordResetDone = '/account/password/reset/done/';
export const passwordResetConfirm = '/account/password/reset/confirm/';
export const passwordResetComplete = '/account/password/reset/complete/';

// LK
export const lk = '/lk';
export const pagesPayment = '/lk/pages/payment/';
export const storesCreate = '/lk/stores/create/';
export const orderinside = '/companies/orders/orderinside';
export const legalRules = '/lk/legal/rules/';
export const legalConfidential = '/lk/legal/confidential/';
export const support = '/support';
export const profile = '/account/profile/';

// COMPANY sidebar
export const company = '/lk/companies/:companyIdentifier';

export const companyOverview = '/lk/companies/:companyIdentifier/overview';
export const companyEdit = '/lk/companies/:companyIdentifier/edit';
export const companyDashBoard = '/lk/companies/:companyIdentifier/dashboard';
export const companySuppliers = '/lk/companies/:companyIdentifier/suppliers';
export const companySuppliersCreate = '/lk/companies/:companyIdentifier/suppliers/create';
export const companyOrdersToSuppliers = '/lk/companies/:companyIdentifier/purchases/orders-to-suppliers';
export const companyOrdersToSuppliersCreate = '/lk/companies/:companyIdentifier/purchases/orders-to-suppliers/create';
export const companyReceipts = '/lk/companies/:companyIdentifier/goods/receipts';
export const companyReceiptsCreate = '/lk/companies/:companyIdentifier/goods/receipts/create';
export const companyGoodsAll = '/lk/companies/:companyIdentifier/goods/all/';
export const companyGoodsNew = '/lk/companies/:companyIdentifier/goods/new/';
export const companyGoodsLeftoversSale = '/lk/companies/:companyIdentifier/goods/leftovers-sale/';
export const companyGoodsFavorite = '/lk/companies/:companyIdentifier/goods/favorite/';
export const companyGoodsCreate = '/lk/companies/:companyIdentifier/goods/create';
export const companyInventories = '/lk/companies/:companyIdentifier/goods/inventories';
export const companyInventoriesCreate = '/lk/companies/:companyIdentifier/goods/inventories/create';
export const companyPostings = '/lk/companies/:companyIdentifier/goods/postings';
export const companyPostingsCreate = '/lk/companies/:companyIdentifier/goods/postings/create';
export const companyWriteoffs = '/lk/companies/:companyIdentifier/goods/writeoffs';
export const companyWriteoffsCreate = '/lk/companies/:companyIdentifier/goods/writeoffs/create';
export const companyStorages = '/lk/companies/:companyIdentifier/storages';
export const companyStoragesCreate = '/lk/companies/:companyIdentifier/storages/create';
export const companyAnalytics = '/lk/companies/:companyIdentifier/goods/analytics';
export const companyOrdersAll = '/lk/companies/:companyIdentifier/orders/all/';
export const companyOrdersAwaitingPackaging = '/lk/companies/:companyIdentifier/orders/awaiting-packaging/';
export const companyOrdersAwaitingDeliver = '/lk/companies/:companyIdentifier/orders/awaiting-deliver/';
export const companyOrdersDelivering = '/lk/companies/:companyIdentifier/orders/delivering/';
export const companyOrdersDelivered = '/lk/companies/:companyIdentifier/orders/delivered/';
export const companyOrdersCancelled = '/lk/companies/:companyIdentifier/orders/cancelled/';
export const companyProductCardsAll = '/lk/companies/:companyIdentifier/product-cards/all';
export const companyProductCardsNew = '/lk/companies/:companyIdentifier/product-cards/new';
export const companyProductCardsAlreadyOnSale = '/lk/companies/:companyIdentifier/product-cards/already-on-sale';
export const companyProductCardsReadyForSale = '/lk/companies/:companyIdentifier/product-cards/ready-for-sale';
export const companyProductCardsNotForSale = '/lk/companies/:companyIdentifier/product-cards/not-for-sale';
export const companyProductCardsArchived = '/lk/companies/:companyIdentifier/product-cards/archived';
export const companyEmployees = '/lk/companies/:companyIdentifier/employees';
export const companySalesPrograms = '/lk/companies/:companyIdentifier/sales-programs';
export const companySalesProgramsCeate = '/lk/companies/:companyIdentifier/sales-programs/create';

// company out sidebar
export const postingsDetail = '/lk/companies/:companyIdentifier/goods/postings/:postingsIdentifier/overview';
export const receiptsDetail = '/lk/companies/:companyIdentifier/goods/receipts/:receiptsIdentifier/overview';
export const receiptsUpdate = '/lk/companies/:companyIdentifier/goods/receipts/:receiptsIdentifier/goods/change/';
export const writeoffsDetail = '/lk/companies/:companyIdentifier/goods/writeoffs/:writeoffsIdentifier/overview';
export const goodsDetail = '/lk/companies/:companyIdentifier/goods/:goodsIdentifier/overview';
export const goodsEdit = '/lk/companies/:companyIdentifier/goods/:goodsIdentifier/edit';
export const inventoriesDetail = '/lk/companies/:companyIdentifier/goods/inventories/:inventoriesIdentifier/overview';
export const inventoriesEdit = '/lk/companies/:companyIdentifier/goods/inventories/:inventoriesIdentifier/items/';
/* eslint-disable-next-line max-len */
export const ordersToSuppliersDetail = '/lk/companies/:companyIdentifier/purchases/orders-to-suppliers/:ordersToSuppliersIdentifier/overview';
/* eslint-disable-next-line max-len */
export const ordersToSuppliersEdit = '/lk/companies/:companyIdentifier/purchases/orders-to-suppliers/:ordersToSuppliersIdentifier/goods/change';
export const suppliersDetail = '/lk/companies/:companyIdentifier/suppliers/:suppliersIdentifier/overview';
export const suppliersDetailEdit = '/lk/companies/:companyIdentifier/supplier/:supplierIdentifier/update';
export const storagesDetail = '/lk/companies/:companyIdentifier/storages/:storagesIdentifier/overview';
export const storagesEdit = '/lk/companies/:companyIdentifier/storage/:storageIdentifier/edit';
export const employeeDetail = '/lk/companies/:companyIdentifier/employee/:employeeIdentifier';
export const salesProdramsDetail = '/lk/companies/:companyIdentifier/sales-programs/:salesProgramsIdentifier/overview';
export const salesProdramsEdit = '/lk/companies/:companyIdentifier/sales-program/:salesProgramsIdentifier/update';
/* eslint-disable-next-line max-len */
export const companyWarehousesTurnover = '/lk/companies/:companyIdentifier/warehouses/:warehousesIdentifier/turnover/overview';
/* eslint-disable-next-line max-len */
export const companyWarehousesForecast = '/lk/companies/:companyIdentifier/warehouses/:warehousesIdentifier/forecast/overview';

// STORE sidebar
export const store = '/lk/stores/:storeIdentifier';

export const storeOverview = '/lk/stores/:storeIdentifier/overview';
export const storeEdit = '/lk/stores/:storeIdentifier/change';
export const storeIntegration = '/lk/stores/:storeIdentifier/integration';
export const storeDashboard = '/lk/stores/:storeIdentifier/dashboard';
export const storeOrdersAll = '/lk/stores/:storeIdentifier/orders/all';
export const storeOrdersAwaitingPackaging = '/lk/stores/:storeIdentifier/orders/awaiting-packaging/';
export const storeOrdersAwaitingDeliver = '/lk/stores/:storeIdentifier/orders/awaiting-deliver/';
export const storeOrdersDelivering = '/lk/stores/:storeIdentifier/orders/delivering/';
export const storeOrdersDelivered = '/lk/stores/:storeIdentifier/orders/delivered/';
export const storeOrdersCancelled = '/lk/stores/:storeIdentifier/orders/cancelled/';
export const storeProductCardsAll = '/lk/stores/:storeIdentifier/product-cards/all';
export const storeProductCardsNew = '/lk/stores/:storeIdentifier/product-cards/new';
export const storeProductCardsAlreadyOnSale = '/lk/stores/:storeIdentifier/product-cards/already-on-sale';
export const storeProductCardsReadyforSale = '/lk/stores/:storeIdentifier/product-cards/ready-for-sale';
export const storeProductCardsNotforSale = '/lk/stores/:storeIdentifier/product-cards/not-for-sale';
export const storeProductCardsArchived = '/lk/stores/:storeIdentifier/product-cards/archived';
export const storeExpenses = '/lk/stores/:storeIdentifier/expenses';
export const storeAccess = '/lk/stores/:storeIdentifier/access';

// STORE out sidebar
export const storeProductCardsDetail = '/lk/stores/:storeIdentifier/product-cards/:productCardsIdentifier/overview';
export const storeProductCardsEdit = '/lk/stores/:storeIdentifier/product-cards/:productCardsIdentifier/update';
export const storeOrdersDetail = '/lk/stores/:storeIdentifier/orders/:ordersIdentifier/overview';

// billing
export const billingDomain = '/lk/billing';
export const billingAccountDetail = '/billing/accounts/:billingIdentifier/';
export const billingAccounts = '/billing/accounts/';

// partnership
export const partnership = '/partnership/';
