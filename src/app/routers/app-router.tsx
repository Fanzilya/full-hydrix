import { createBrowserRouter } from "react-router-dom";


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
                path: 'helper',
                async lazy() {
                    const { Helper } = await import("@/modules/dispatcher/helper")
                    return {
                        Component: Helper
                    }
                }
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
                        children: [
                            {
                                path: "form",
                                async lazy() {
                                    const { RequestForm } = await import("@/modules/dispatcher/orders/tabs/form/tabs/request-form")
                                    return {
                                        Component: RequestForm
                                    }
                                },
                            },
                            {
                                path: "information",
                                async lazy() {
                                    const { RequestForm } = await import("@/modules/dispatcher/orders/tabs/form/tabs/request-form")
                                    return {
                                        Component: RequestForm
                                    }
                                },
                            },
                            {
                                path: "tasks",
                                async lazy() {
                                    const { RequestForm } = await import("@/modules/dispatcher/orders/tabs/form/tabs/request-form")
                                    return {
                                        Component: RequestForm
                                    }
                                },
                            },
                            {
                                path: "journal",
                                async lazy() {
                                    const { RequestForm } = await import("@/modules/dispatcher/orders/tabs/form/tabs/request-form")
                                    return {
                                        Component: RequestForm
                                    }
                                },
                            },
                            {
                                path: "history",
                                async lazy() {
                                    const { RequestHistory } = await import("@/modules/dispatcher/orders/tabs/form/tabs/request-history")
                                    return {
                                        Component: RequestHistory
                                    }
                                },
                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        path: '/trieco',
        children: [
            {
                path: "client",
                async lazy() {
                    const { ClientLayout } = await import("@/modules/trieco/client/layout")
                    return {
                        Component: ClientLayout
                    }
                },
                children: [
                    // {
                    //     path: 'registration',
                    //     async lazy() {
                    //         const { Registration } = await import("@/modules/client/viewports/registration/registration")
                    //         return {
                    //             Component: Registration
                    //         }
                    //     }
                    // },
                    // {
                    //     path: 'registration',
                    //     element: <Navigate to="/auth" replace />,
                    //     async lazy() {
                    //         const { Auth } = await import("@/modules/admin/viewports/auth/auth")
                    //         return {
                    //             Component: Auth
                    //         }
                    //     }
                    // },
                    // {
                    //     path: 'auth',
                    //     async lazy() {
                    //         const { Auth } = await import("@/modules/client/viewports/auth/auth")
                    //         return {
                    //             Component: Auth
                    //         }
                    //     }
                    // },
                    // {
                    //     path: 'registration/confirm',
                    //     async lazy() {
                    //         const { EmailConfirm } = await import("@/modules/client/viewports/emal-confirm/email-confirm")
                    //         return {
                    //             Component: EmailConfirm
                    //         }
                    //     }
                    // },
                    // {
                    //     path: 'reset',
                    //     async lazy() {
                    //         const { PasswordRecovery } = await import("@/modules/client/viewports/recovery-password/recovery")
                    //         return {
                    //             Component: PasswordRecovery
                    //         }
                    //     }
                    // },
                    // {
                    //     path: '',
                    //     async lazy() {
                    //         const { ClientLayout } = await import("@/modules/client/components/client-layout")
                    //         return {
                    //             Component: ClientLayout
                    //         }
                    //     },
                    //     children: [
                    //         {
                    //             path: '',
                    //             async lazy() {
                    //                 const { Main } = await import("@/modules/client/viewports/main/main")
                    //                 return {
                    //                     Component: Main
                    //                 }
                    //             }

                    //         },
                    //         {
                    //             path: 'order/create',
                    //             async lazy() {
                    //                 const { CreateOrder } = await import("@/modules/client/viewports/create-order/create-order")
                    //                 return {
                    //                     Component: CreateOrder
                    //                 }
                    //             }
                    //         },
                    //         {
                    //             path: 'pickup/create',
                    //             async lazy() {
                    //                 const { CreatePoint } = await import("@/modules/client/viewports/create-pickup-point/create-point")
                    //                 return {
                    //                     Component: CreatePoint
                    //                 }
                    //             }
                    //         },
                    //         {
                    //             path: 'pickup/edit',
                    //             async lazy() {
                    //                 const { EditPoint } = await import("@/modules/client/viewports/edit-point/edit-point")
                    //                 return {
                    //                     Component: EditPoint
                    //                 }
                    //             }
                    //         },
                    //         {
                    //             path: 'orders',
                    //             async lazy() {
                    //                 const { Orders } = await import("@/modules/client/viewports/orders/orders")
                    //                 return {
                    //                     Component: Orders
                    //                 }
                    //             }
                    //         },
                    //         {
                    //             path: 'profile',
                    //             async lazy() {
                    //                 const { Profile } = await import("@/modules/client/viewports/profile/profile")
                    //                 return {
                    //                     Component: Profile
                    //                 }
                    //             }
                    //         },
                    //     ]
                    // },
                ]
            },
            // {
            //     path: '/admin',
            //     element: <Admin />,
            //     children: [
            //         {
            //             path: 'auth',
            //             element: <Navigate to="/auth" replace />,
            //             async lazy() {
            //                 const { AuthLayout } = await import("@/modules/admin/components/auth-layout")
            //                 return {
            //                     Component: AuthLayout
            //                 }
            //             },
            //             children: [
            //                 {
            //                     path: 'main',
            //                     async lazy() {
            //                         const { Main } = await import("@/modules/admin/viewports/main/main")
            //                         return {
            //                             Component: Main
            //                         }
            //                     }
            //                 },
            //                 {
            //                     path: '',
            //                     element: <Navigate to="/auth" replace />,
            //                     // async lazy() {
            //                     //     const { Auth } = await import("@/modules/admin/viewports/auth/auth")

            //                     //     return {
            //                     //         Component: Auth
            //                     //     }
            //                     // }
            //                 },
            //             ]
            //         },
            //         {
            //             path: '',
            //             async lazy() {
            //                 const { AdminLayout } = await import('@/modules/admin/components/admin-layout')
            //                 return {
            //                     Component: AdminLayout
            //                 }
            //             },
            //             children: [
            //                 {
            //                     path: 'sewers',
            //                     async lazy() {
            //                         const { SewerList } = await import("@/modules/admin/viewports/sewer-list/sewer-list")
            //                         return {
            //                             Component: SewerList
            //                         }
            //                     }
            //                 },
            //                 {
            //                     path: 'orders',
            //                     async lazy() {
            //                         const { OrderList } = await import("@/modules/admin/viewports/orders/order-list")
            //                         return {
            //                             Component: OrderList
            //                         }
            //                     }
            //                 },
            //                 {
            //                     path: 'Calendar',
            //                     async lazy() {
            //                         const { Calendar } = await import("@/modules/admin/viewports/calendar/calendar")
            //                         return {
            //                             Component: Calendar
            //                         }
            //                     }
            //                 },
            //                 {
            //                     path: 'statistics',
            //                     async lazy() {
            //                         const { Stats } = await import("@/modules/admin/viewports/stats/stats")
            //                         return {
            //                             Component: Stats
            //                         }
            //                     }
            //                 },
            //                 {
            //                     path: 'settings',
            //                     async lazy() {
            //                         const { Settings } = await import("@/modules/admin/viewports/settings/settings")
            //                         return {
            //                             Component: Settings
            //                         }
            //                     }
            //                 },
            //                 {
            //                     path: 'cash',
            //                     async lazy() {
            //                         const { CashAccount } = await import("@/modules/admin/viewports/cash-account/cash-account")
            //                         return {
            //                             Component: CashAccount
            //                         }
            //                     }
            //                 }
            //             ]
            //         },
            //     ]
            // },
            // {
            //     path: '/admin-panel',
            //     element: <AdminPanelView />,
            //     children: [
            //         {
            //             path: 'auth',
            //             async lazy() {
            //                 const { Auth } = await import("@/modules/admin-panel/viewports/auth/auth")
            //                 return {
            //                     Component: Auth
            //                 }
            //             }
            //         },
            //         {
            //             path: '',
            //             async lazy() {
            //                 const { AdminPanelLayout } = await import("@/modules/admin-panel/components/admin-panel-layout")
            //                 return {
            //                     Component: AdminPanelLayout
            //                 }
            //             },
            //             children: [
            //                 {
            //                     path: '',
            //                     async lazy() {
            //                         const { Users } = await import("@/modules/admin-panel/viewports/users/users")
            //                         return {
            //                             Component: Users
            //                         }
            //                     }
            //                 },
            //                 {
            //                     path: 'sewers',
            //                     async lazy() {
            //                         const { SewerList } = await import("@/modules/admin-panel/viewports/sewer-list/sewer-list")
            //                         return {
            //                             Component: SewerList
            //                         }
            //                     }
            //                 },
            //                 {
            //                     path: 'companies',
            //                     async lazy() {
            //                         const { Companies } = await import("@/modules/admin-panel/viewports/companies/companies")
            //                         return {
            //                             Component: Companies
            //                         }
            //                     }
            //                 },
            //             ]
            //         },
            //     ]
            // }
        ]
    },

]);
