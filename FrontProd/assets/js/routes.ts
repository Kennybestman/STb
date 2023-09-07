import { dathNot, nsitf } from '../../app/Interfaces/application-type'
import { customerSupport, accountSupport, sharedOfficer, branchHead, bmuLead, bmuMaker, checker, unitHead, deptHead, edOpera, fundAccount, signatory, zenithCustodian, bmuUnit } from '../../app/Interfaces/rsa-stage'

export const routes = function (apptype: string, code: string) {
    if (apptype !== nsitf && apptype !== dathNot) {
        let apptype2 = [
            //===============first level approver routes =========== 
            {
                code: "AA0",
                initiationCode: "AAA",
                possibleRoutes: [
                    {
                        name: "Author",
                        username: "",
                        condition: true,
                        authenticationType: "User",
                        authenticationValue: null,
                        actionType: "Actor",
                        emails: [],
                        doa: false,
                        flow: "normal",
                        users: []
                    }
                ]
            },
            {
                code: "AA1",
                initiationCode: "AA0",
                possibleRoutes: [{
                    name: accountSupport,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA2",
                initiationCode: "AA1",
                possibleRoutes: [{
                    name: branchHead,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA3",
                initiationCode: "AA2",
                possibleRoutes: [{
                    name: sharedOfficer,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA4",
                initiationCode: "AA3",
                possibleRoutes: [{
                    name: bmuLead,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA5",
                initiationCode: "AA4",
                possibleRoutes: [{
                    name: bmuMaker,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA6",
                initiationCode: "AA5",
                possibleRoutes: [{
                    name: checker,
                    username: "",
                    condition: true,
                    authenticationType: "User",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA7",
                initiationCode: "AA6",
                possibleRoutes: [{
                    name: unitHead,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA8",
                initiationCode: "AA7",
                possibleRoutes: [{
                    name: deptHead,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA9",
                initiationCode: "AA8",
                possibleRoutes: [{
                    name: edOpera,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA10",
                initiationCode: "AA9",
                possibleRoutes: [{
                    name: fundAccount,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA11",
                initiationCode: "AA10",
                possibleRoutes: [{
                    name: signatory,
                    username: "",
                    condition: true,
                    authenticationType: "User",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA12",
                initiationCode: "AA11",
                possibleRoutes: [{
                    name: signatory,
                    username: "",
                    condition: true,
                    authenticationType: "User",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA13",
                initiationCode: "AA12",
                possibleRoutes: [{
                    name: zenithCustodian,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            }
        ];
        return apptype2;
    } else if (apptype === dathNot) {
        let apptype2 = [
            //===============first level approver routes ===========
            {
                code: "AA0",
                initiationCode: "AAA",
                possibleRoutes: [
                    {
                        name: "Author",
                        username: "",
                        condition: true,
                        authenticationType: "User",
                        authenticationValue: null,
                        actionType: "Actor",
                        emails: [],
                        doa: false,
                        flow: "normal",
                        users: []
                    }
                ]
            },
            {
                code: "AA1",
                initiationCode: "AA0",
                possibleRoutes: [{
                    name: accountSupport,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA2",
                initiationCode: "AA1",
                possibleRoutes: [{
                    name: branchHead,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA3",
                initiationCode: "AA2",
                possibleRoutes: [{
                    name: sharedOfficer,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            }
        ];
        return apptype2
    } else if (apptype === nsitf) {
        let apptype2 = [
            //===============first level approver routes ===========
            {
                code: "AA0",
                initiationCode: "AAA",
                possibleRoutes: [
                    {
                        name: "Author",
                        username: "",
                        condition: true,
                        authenticationType: "User",
                        authenticationValue: null,
                        actionType: "Actor",
                        emails: [],
                        doa: false,
                        flow: "normal",
                        users: []
                    }
                ]
            },
            {
                code: "AA1",
                initiationCode: "AA0",
                possibleRoutes: [{
                    name: bmuUnit,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA2",
                initiationCode: "AA1",
                possibleRoutes: [{
                    name: bmuUnit,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA3",
                initiationCode: "AA2",
                possibleRoutes: [{
                    name: bmuUnit,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            },
            {
                code: "AA4",
                initiationCode: "AA3",
                possibleRoutes: [{
                    name: bmuUnit,
                    username: "",
                    condition: true,
                    authenticationType: "Group",
                    authenticationValue: null,
                    actionType: "Actor",
                    emails: [],
                    doa: false,
                    flow: "normal",
                    users: []
                }]
            }
        ];
        return apptype2
    }
}