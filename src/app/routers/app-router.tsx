import { createBrowserRouter } from "react-router-dom";

// GIS
// import { AdminLayout } from "@/modules/gis/components/admin-layout";
// import { Gis } from "@/modules/gis/kernel/gis";
// import { Auth } from "@/modules/gis/viewports/auth/auth";
// import { AuthModuls } from "@/modules/gis/viewports/auth-moduls/auth-moduls";
// import { WaterCompany } from "@/modules/gis/viewports/company/company";
// import { StationsList } from "@/modules/gis/viewports/drain-stations/stations";
// import { Enterprise } from "@/modules/gis/viewports/enterprise/enterprise";
// import { EnterprisesList } from "@/modules/gis/viewports/enterprises/enterprises";
// import { Main } from "@/modules/gis/viewports/main/main";
// import { Operators } from "@/modules/gis/viewports/operators/operators";
// import { OrderList } from "@/modules/gis/viewports/orders/order-list";
// import { SewerList } from "@/modules/gis/viewports/sewer-list/sewer-list";
// import { AllStats } from "@/modules/gis/viewports/stats-all/stats-all";
// import { RecyclingStats } from "@/modules/gis/viewports/stats-recycling/stats-recycling";
// import { TransportationStats } from "@/modules/gis/viewports/stats-transportation/stats-transportation";


// import { createBrowserRouter } from "react-router-dom";
// import { Stats } from "@/modules/gis/viewports/stats/stats";
// GIS

// TRIECO

// TRIECO

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        async lazy() {
            const { Layout } = await import("@/modules/auth/loyauts")
            return {
                Component: Layout
            }
        },

        children: [
            {
                index: true,
                async lazy() {
                    const { Login } = await import("@/modules/auth/pages/login")
                    return {
                        Component: Login
                    }
                }
            },
            {
                path: '/menu-moduls',
                async lazy() {
                    const { MenuModuls } = await import("@/modules/auth/pages/menu-moduls")
                    return {
                        Component: MenuModuls
                    }
                }
            },
        ]
    },
    {
        path: '/gis',
        async lazy() {
            const { Layout } = await import("@/modules/gis/layout")
            return {
                Component: Layout
            }
        },
        children: [
            {
                path: 'companies',
                async lazy() {
                    const { CompanyList } = await import("@/modules/gis/pages/water-companies")
                    return {
                        Component: CompanyList
                    }
                },
            },
            {
                path: 'sewers',
                async lazy() {
                    const { SewerList } = await import("@/modules/gis/pages/sewer-list")
                    return {
                        Component: SewerList
                    }
                },
            },
            {
                path: 'orders',
                async lazy() {
                    const { OrderList } = await import("@/modules/gis/pages/orders")
                    return {
                        Component: OrderList
                    }
                },

            },
            {
                path: 'drain-stations',
                async lazy() {
                    const { StationsList } = await import("@/modules/gis/pages/drain-stations")
                    return {
                        Component: StationsList
                    }
                },
            },
            {
                path: 'enterprises',
                async lazy() {
                    const { EnterprisesList } = await import("@/modules/gis/pages/enterprises")
                    return {
                        Component: EnterprisesList
                    }
                },
            },
            {
                path: 'operators',
                async lazy() {
                    const { Operators } = await import("@/modules/gis/pages/operators")
                    return {
                        Component: Operators
                    }
                },
            },
            {
                path: "company/:companyId",
                async lazy() {
                    const { WaterCompany } = await import("@/modules/gis/pages/company")
                    return {
                        Component: WaterCompany
                    }
                },
            },
            // {
            //     path: 'company/:companyId/stats/all',
            //     async lazy() {
            //         const { AllStats } = await import("@/modules/gis/pages/stats-all")
            //         return {
            //             Component: AllStats
            //         }
            //     },
            // },
            // {
            //     path: 'company/:companyId/stats/transportation',
            //     async lazy() {
            //         const { TransportationStats } = await import("@/modules/gis/pages/stats-transportation")
            //         return {
            //             Component: TransportationStats
            //         }
            //     },
            // },
            {
                path: 'company/:companyId/stats/recycling',
                async lazy() {
                    const { RecyclingStats } = await import("@/modules/gis/pages/stats-recycling")
                    return {
                        Component: RecyclingStats
                    }
                },
            },
            {
                path: 'company/:companyId/stats',
                async lazy() {
                    const { Stats } = await import("@/modules/gis/pages/stats/stats.tsx")
                    return {
                        Component: Stats
                    }
                },
            },
            {
                path: 'enterprise/enterpriseId',
                async lazy() {
                    const { Enterprise } = await import("@/modules/gis/pages/enterprise")
                    return {
                        Component: Enterprise
                    }
                },
            },
        ]
    },
    {
        path: '/domain',
        async lazy() {
            const { Layout } = await import("@/modules/domain/layout")
            return {
                Component: Layout
            }
        },
        children: [
            {
                path: ":page",
                async lazy() {
                    const { RegistryObjectsLayout } = await import("@/modules/domain/pages/registry-objects")
                    return {
                        Component: RegistryObjectsLayout
                    }
                },
            },
            {
                path: "passport",
                async lazy() {
                    const { PassportObject } = await import("@/modules/domain/pages/passport")
                    return {
                        Component: PassportObject
                    }
                },
            },
        ]
    },
    {
        path: '/dispatcher',
        async lazy() {
            const { Layout } = await import("@/modules/dispatcher/layout")
            return {
                Component: Layout
            }
        },
        children: [
            {
                index: true,
                async lazy() {
                    const { Scheme } = await import("@/modules/dispatcher/scheme")
                    return {
                        Component: Scheme
                    }
                },
            },
            {
                path: "timmodel",
                async lazy() {
                    const { TimModel } = await import("@/modules/dispatcher/tim-model")
                    return {
                        Component: TimModel
                    }
                },
            },
            {
                path: "equipment",
                async lazy() {
                    const { EquipmentRegistry } = await import("@/modules/dispatcher/equipment")
                    return {
                        Component: EquipmentRegistry
                    }
                },
            },
            {
                path: "equipment-about",
                async lazy() {
                    const { EquipmentAbout } = await import("@/modules/dispatcher/equipment-about")
                    return {
                        Component: EquipmentAbout
                    }
                },
                children: [
                    {
                        path: "passport",
                        async lazy() {
                            const { EquipmentPassport } = await import("@/modules/dispatcher/equipment-about/tabs/passport")
                            return {
                                Component: EquipmentPassport
                            }
                        }
                    },
                    {
                        path: "controll",
                        async lazy() {
                            const { EquipmentControll } = await import("@/modules/dispatcher/equipment-about/tabs/controll")
                            return {
                                Component: EquipmentControll
                            }
                        }
                    }
                ]
            },
            {
                path: "orders",
                async lazy() {
                    const { RequestRegistry } = await import("@/modules/dispatcher/orders")
                    return {
                        Component: RequestRegistry
                    }
                },
                children: [
                    {
                        index: true,
                        async lazy() {
                            const { RequestRegistryList } = await import("@/modules/dispatcher/orders/tabs/list")
                            return {
                                Component: RequestRegistryList
                            }
                        },
                    },
                    {
                        path: "create",
                        async lazy() {
                            const { RequestRegistryForm } = await import("@/modules/dispatcher/orders/tabs/form")
                            return {
                                Component: RequestRegistryForm
                            }
                        },
                    }
                ]
            },
        ]
    }
]);
