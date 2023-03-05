import Vue from "vue";
import VueRouter from "vue-router";
import AdminLogin from '../components/AdminLogin.vue';
import StudentsLogin from '../components/StudentLogin.vue';
import TeachersLogin from '../components/TeachersLogin.vue';
import studentresults from "../components/student-results.vue"
import studentHome from '../components/studentHome.vue'
import studentaccount from '../components/student-account.vue';
import teachersignIn from '../components/teacherSignin.vue'
import studentsignIn from '../components/student-signIn.vue';
import AdminAcc from '../components/AdminAccount.vue'
import AdminsignIn from '../components/admiSignim.vue';
import teachersHome from '../components/teachersHomepage.vue'
import teachersacount from '../components/teacher-account.vue'
import adminHome from '../components/adminHome.vue'
import editstudent from '../components/edit-studaccount.vue'
import editAdmin from "../components/edit-Adminacc.vue"
import editTeacher from "../components/edit-teachersaccount"
import payFees from "../components/pay-fees.vue"
import financialstatement from "../components/finance-statement.vue"
import viewFinance from "../components/viewFinance.vue"
import ClassAnalysis from "../components/ClassAnalysis.vue"
import Result from "../components/student-results.vue"
import addResults from "../components/addResults.vue"
import feestobepaid from "../components/admin-feestobepaid.vue"
import enterNotice from "../components/enter-notice.vue"
import viewNotice from "../components/viewNotice.vue"
import chatschool from "../components/chat-School.vue"
import myLibary from "../components/my-Library.vue"
import teacherAddLibray from "../components/teacher-add-library.vue"
import teacherLibray from "../components/teacher-library.vue"
import teacherViewNotice from "../components/teacher-viewNotice.vue"
import adminViewNotice from "../components/adminView-Notice.vue"
import payNow from "../components/pay-now.vue"
import enrolment from "../components/Enrol-Student"
import suggestpayment from "../components/suggest_payment"
import teacherschat from "../components/Teachers-ChatRoom.vue"
import register_subjects from "../components/Register-Subject.vue"
import addTimetable from "../components/addTimeTable.vue"
import updateTimeTable from "../components/updateTimeTable.vue"
import viewTimeTable from "../components/ViewTimeTable.vue"
import viewTimeTableStudent from "../components/viewTimeTableStudent.vue"
import subjectsandclasses from "../components/SuvjectAndClassees.vue"
import SearchStudent from "../components/Search_Student.vue"
import SearchTeacher from "../components/Search_Teacher.vue"
import SuggestSearch from "../components/Suggest_Search"
import adminClassAnalysis from "../components/admin_ClassAnalysis.vue"
import DeleteTeacher from "../components/DeleteTeache.vue"
import DeleteStudent from "../components/DeleteStudent.vue"
import SuggestDelete from "../components/Suggest_Delete.vue"

Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
            path: "/sudent-home",
            name: "studenthome",
            component: studentHome,
            props: true
        }, {
            path: "/DeleteTeacher",
            name: "DeleteTeacher",
            component: DeleteTeacher,
            props: true
        },
        {
            path: "/SuggestDelete",
            name: "SuggestDelete",
            component: SuggestDelete,
            props: true
        },
        {
            path: "/DeleteStudent",
            name: "DeleteStudent",
            component: DeleteStudent,
            props: true
        },
        {
            path: "/subjectsandclasses",
            name: "subjectsandclasses",
            component: subjectsandclasses,
            props: true
        },
        {
            path: "/adminClassAnalysis",
            name: "adminClassAnalysis",
            component: adminClassAnalysis,
            props: true
        },
        {
            path: "/SearchStudent",
            name: "SearchStudent",
            component: SearchStudent,
            props: true
        },
        {
            path: "/SearchTeacher",
            name: "SearchTeacher",
            component: SearchTeacher,
            props: true
        },
        {
            path: "/SuggestSearch",
            name: "SuggestSearch",
            component: SuggestSearch,
            props: true
        },
        {
            path: "/viewTimeTableStudent",
            name: "viewTimeTableStudent",
            component: viewTimeTableStudent,
            props: true
        },
        {
            path: "/viewTimeTableTeacher",
            name: "viewTimeTable",
            component: viewTimeTable,
            props: true
        }, 
        {
            path: "/updateTimeTable",
            name: "updateTimeTable",
            component: updateTimeTable,
            props: true
        },
        {
            path: "/addTimetable",
            name: "addTimetable",
            component: addTimetable,
            props: true
        },  
        {
            path: "/register_subjects",
            name: "registersubjects",
            component: register_subjects,
            props: true
        },     
        {
            path: "/suggest_payment",
            name: "suggestpayment",
            component: suggestpayment,
            props: true
        },   
        {
            path: "/teachersChat",
            name: "teacherschat",
            component: teacherschat,
            props: true
        },   
        {
            path: "/pay-now",
            name: "pay-now",
            component: payNow,
            props: true
        }, 
        {
            path: "/enrolment-student",
            name: "pay-now",
            component: enrolment,
            props: true
        }, 
        {
            path: "/adminView_Notice",
            name: "teacherlibray",
            component: adminViewNotice,
            props: true
        },
        {
            path: "/teacher-library",
            name: "teacherlibray",
            component: teacherLibray,
            props: true
        },
        {
            path: "/teacher-add-library",
            name: "teacher+libray",
            component: teacherAddLibray,
            props: true
        },
        {
            path: "/my-library",
            name: "my+libray",
            component: myLibary,
            props: true
        },
        {
            path: "/chatschool",
            name: "chatschool",
            component: chatschool,
        },

        {
            path: "/teacher-View-Notice",
            name: "teacherNotice",
            component: teacherViewNotice,
        },
        {
            path: "/studentviewNoticeBoard",
            name: "noticeboad",
            component: viewNotice,
        },
        {
            path: "/enterNotice",
            name: "enterNotice",
            component: enterNotice,
            props: true
        },{
            path: "/enter-feestobepaid",
            name: "feestobepaid",
            component: feestobepaid,
            props: true
        },
        {
            path: "/enter-results",
            name: "addResults",
            component: addResults,
            props: true
        },
        {
            path: "/sudent-resulty",
            name: "Result",
            component: Result,
            props: true
        },
        {
            path: "/class-analyse",
            name: "ClassAnalysis",
            component: ClassAnalysis,
            props: true
        },
        {
            path: "/view-finance",
            name: "viewFinance",
            component: viewFinance,
            props: true
        },
        {
            path: "/edit-teachers",
            name: "editTeacher",
            component: editTeacher,
            props: true
        },

        {
            path: "/student-account",
            name: "studentaccount",
            component: studentaccount,
            props: true
        }, {
            path: "/teachers-account",
            name: "teacheraccount",
            component: teachersacount,
            props: true
        },
        {
            path: "/pay-fees",
            name: "payFees",
            component: payFees,
            props: true
        },
        {
            path: "/financial-statement",
            name: "financialstatement",
            component: financialstatement,
            props: true
        }, {
            path: "/admin-account",
            name: "AdminAccount",
            component: AdminAcc,
            props: true
        },
        {
            path: "/edit-Admin",
            name: "editAdmin",
            component: editAdmin,
            props: true
        }, {
            path: "/teachers-home",
            name: "teachersHome",
            component: teachersHome,
            props: true
        }, {
            path: "/admi-home",
            name: "admin-home",
            component: adminHome
        }, {
            path: "/admin-signin",
            name: "AdminsignIn",
            component: AdminsignIn,
            props: true
        }, {
            path: "/student-login",
            name: "StudentLogin",
            component: StudentsLogin,
            props: true
        }, {
            path: "/teacher-login",
            name: "TeachersLogin",
            component: TeachersLogin,
            props: true
        },
        {
            path: "/edit-student",
            name: "editstudent",
            component: editstudent,
            props: true
        }, {
            path: "/admin-login",
            name: "adminlogin",
            component: AdminLogin,
            props: true
        },
        {
            path: "/student-signIn",
            name: "studentsignIn",
            component: studentsignIn,
            props: true
        },
        {
            path: "/teacher-signin",
            name: "teachersignin",
            component: teachersignIn,
            props: true
        },
        {
            path: "/student-results",
            name: "student-results",
            component: studentresults,
            props: true
        },
    ]

})