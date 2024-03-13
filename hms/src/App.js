import React from "react";
import {  BrowserRouter, Router, Routes, Route } from "react-router-dom";

import LandingPage from './LandingPage';
import RegistrationForm from './RegistrationForm';
import LoginCard from './LoginCard';
import ResetPasswordForm from './ResetPasswordForm ';
import Admindashboard from './Admindashboard';
import Total_Bookings from './Total_Bookings';
import Payment_details from './Payment_details';
import Customer_details from './Customer_details';
import Accomodations from './Accomodations';
import PS from './PS';
import DS from './DS';
import CD from './CD';
import BH from './BH';
import SH from './SH';
import Addroom from './Addroom';
import Createaccount from './Createaccount';
import Customerdashboard from './Customerdashboard';
import Checkavailability from './Checkavailabilty';
import Banktransfer from './Banktransfer';
import CCBanks from './CCBanks';
import VisaCreditcard from './VisaCreditcard';
import RupayCreditcard from './RupayCreditcard';
import DCBanks from './DCBanks';
import VisaDebitcard from './VisaDebitcard';
import RupayDebitcard from './RupayDebitcard';
import Hdfcbank from './Hdfcbank';
import Payments from './Payments';
 import Phonepe from './Phonepe';
 import UPI from './UPI';
 import GooglePay from './Googlepay';
import IciciBank from './Icicibank';
import Sbibank from './Sbibank';
import Availabilty from './Availability';
import Rooms_details from './Rooms_details';
import Cancellations from './Cancellations';
import Mybookings from './Mybookings';
import Adminreports from './Adminreports';
import Reportspayment from './Reportspayment';
import Profile from './Profile';

import Restaurant from'./Restaurant';
import IndianMenu from './IndianMenu';
import ContinentalMenu from './ContinentalMenu';
import ChineaseMenu from './ChineaseMenu';
import MoghulaiMenu from './MoghulaiMenu';
import AddIndianBreakfast from './AddIndianBreakfast';
import AddIndianCurries from './AddIndianCurries';
import AddIndianSoups from './AddIndianSoups';
import AddIndianStarters from './AddIndianStarters';
import AddIndianMainCourse from './AddIndianMainCourse';
import AddIndianDesserts from './AddIndianDesserts';
import AddIndianDrinks from './AddIndianDrinks';
import UpdateIndianBreakfast from './UpdateIndianBreakfast';
import UpdateIndianCurries from './UpdateIndianCurries';
import UpdateIndianSoups from './UpdateIndianSoups';
import UpdateIndianStarters from './UpdateIndianStarters';
import UpdateIndianMainCourse from './UpdateIndianMainCourse';
import UpdateIndianDesserts from './UpdateIndianDesserts';
import UpdateIndianDrinks from './UpdateIndianDrinks';
import AddContinentalBreakfast from './AddContinentalBreakfast';
import AddContinentalCurries from './AddContinentalCurries';
import AddContinentalSoups from './AddContinentalSoups';
import AddContinentalStarters from './AddContinentalStarters';
import AddContinentalMainCourse from './AddContinentalMainCourse';
import AddContinentalDesserts from './AddContinentalDesserts';
import AddContinentalDrinks from './AddContinentalDrinks';
import UpdateContinentalBreakfast from './UpdateContinentalBreakfast';
import UpdateContinentalCurries from './UpdateContinentalCurries';
import UpdateContinentalSoups from './UpdateContinentalSoups';
import UpdateContinentalStarters from './UpdateContinentalStarters';
import UpdateContinentalmainCourse from './UpdateContinentalmainCourse';
import UpdateContinentalDesserts from './UpdateContinentalDesserts';
import UpdateContinentalDrinks from './UpdateContinentalDrinks';
import AddMoghulaiBreakfast from './AddMoghulaiBreakfast';
import AddMoghulaiCurries from './AddMoghulaiCurries';
import AddMoghulaiSoups from './AddMoghulaiSoups';
import AddMoghulaiStarters from './AddMoghulaiStarters';
import AddMoghulaiMainCourse from './AddMoghulaiMainCourse';
import AddMoghulaiDesserts from './AddMoghulaiDesserts';
import AddMoghulaiDrinks from './AddMoghulaiDrinks';
import UpdateMoghulaiBreakfast from './UpdateMoghulaiBreakfast';
import UpdateMoghulaiCurries from './UpdateMoghulaiCurries';
import UpdateMoghulaiSoups from './UpdateMoghulaiSoups';
import UpdateMoghulaiStarters from './UpdateMoghulaiStarters';
import UpdateMoghulaiMainCourse from './UpdateMoghulaiMainCourse';
import UpdateMoghulaiDesserts from './UpdateMoghulaiDesserts';
import UpdateMoghulaiDrinks from './UpdateMoghulaiDrinks';
import AddChineaseBreakfast from './AddChineaseBreakfast';
import AddChineaseCurries from './AddChineaseCurries';
import AddChineaseSoups from './AddChineaseSoups';
import AddChineaseStarters from './AddChineaseStarters';
import AddChineaseMainCourse from './AddChineaseMainCourse';
import AddChineaseDesserts from './AddChineaseDesserts';
import AddChineaseDrinks from './AddChineaseDrinks';
import UpdateChineaseBreakfast from './UpdateChineaseBreakfast';
import UpdateChineaseCurries from './UpdateChineaseCurries';
import UpdateChineaseSoups from './UpdateChineaseSoups';
import UpdateChineaseStarters from './UpdateChineaseStarters';
import UpdateChineaseMainCourse from './UpdateChineaseMainCourse';
import UpdateChineaseDesserts from './UpdateChineaseDesserts';
import UpdateChineaseDrinks from './UpdateChineaseDrinks';

import MS_chineasemenu from './MS_chineasemenu';
import MS_continentalmenu from './MS_continentalmenu';
import MS_indianmenu from './MS_indianmenu';
import MS_moghulaimenu from './MS_moghulaimenu';
import AddBreakfast from './AddBreakfast';
import AddCurries from './AddCurries';
import AddSoups from './AddSoups';
import AddStarters from './AddStarters';
import AddMainCourse from './AddMainCourse';
import AddDesserts from './AddDesserts';
import AddDrinks from './AddDrinks';
import UpdateBreakfast from './UpdateBreakfast';
import UpdateCurries from './UpdateCurries';
import UpdateSoups from './UpdateSoups';
import UpdateStarters from './UpdateStarters';
import UpdateMainCourse from './UpdateMainCourse';
import UpdateDesserts from './UpdateDesserts';
import UpdateDrinks from './UpdateDrinks';
import Restaurantmenu from './Restaurantmenu';

import Reportcomponent from './Reportcomponent';
import Servicescomponent from './Servicescomponent';
import Addservices from './Addservices';
import Editservices from './Editservices';
import Repostat from './Repostat';
import Addcust from './Addcust';
import Area from './Area';

import Food from './Food';
import V_chinese from './V_chinese';
import V_continental from './V_continental';
import V_indian from './V_indian';
import V_moghulai from './V_moghulai';

import Orders from './Orders';

import Roomservice from './Roomservice';
import Takeaway from './Takeaway';
import Dineinn from './Dineinn';
import Dinecard from './Dinecard';
import Dinecart from './Dinecart';
import Booknow from './Booknow';
import BookingHistory from "./BookingHistory";
import Editprofile from "./Editprofile";
import Premiumsuite from "./Premiumsuite";
import Deluxesuite from "./Deluxesuite";
import Classicdeluxe from "./Classicdeluxe";
import Banquethalls from "./Banquethalls";
import Seminarhalls from "./Seminarhalls";
import CartPage from './CartPage';
import Reports from "./Reports";
import Restaurantreports from "./Restaurantreports";
import Hotelreports from "./Hotelreports";
import Restreports from "./Restreports";
import ForgotPassword from "./ForgotPassword";
import PaymentForm from './PaymentForm';


function App() {
  return (
<div>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
      <Route path='/LoginCard' element={<LoginCard/>}/>
      <Route path='/ResetPasswordForm' element={<ResetPasswordForm/>}/>
      <Route path='/Admindashboard' element={<Admindashboard/>}/>
      <Route path='/Total_Bookings' element={<Total_Bookings/>}/>
      <Route path='/Customer_details' element={<Customer_details/>}/>
      <Route path='/Payment_details' element={<Payment_details/>}/>
      <Route path='/Accomodations' element={<Accomodations/>}/>
      <Route path='/PS' element={<PS/>}/>
      <Route path='/DS' element={<DS/>}/>
      <Route path='/CD' element={<CD/>}/>
      <Route path='/BH' element={<BH/>}/>
      <Route path='/SH' element={<SH/>}/>
      <Route path='/Addroom' element={<Addroom/>}/>
      <Route path='/Createaccount' element={<Createaccount/>}/>
      <Route path='/Customerdashboard' element={<Customerdashboard/>}/>
      <Route path='/Checkavailability' element={<Checkavailability/>}/>
      <Route path='/Banktransfer' element={<Banktransfer/>}/>
      <Route path='/CCBanks' element={<CCBanks/>}/>
      <Route path='/VisaCreditcard' element={<VisaCreditcard/>}/>
      <Route path='/RupayCreditcard' element={<RupayCreditcard/>}/>
      <Route path='/DCBanks' element={<DCBanks/>}/>
      <Route path='/VisaDebitcard' element={<VisaDebitcard/>}/>
      <Route path='/RupayDebitcard' element={<RupayDebitcard/>}/>
      <Route path='/Hdfcbank' element={<Hdfcbank/>}/>
      <Route path='/Payments' element={<Payments/>}/>
      <Route path='/Phonepe' element={<Phonepe/>}/>
      <Route path='/UPI' element={<UPI/>}/>
      <Route path='/Googlepay' element={<GooglePay/>}/>
      <Route path='/Icicibank' element={<IciciBank/>}/>
      <Route path='/Sbibank' element={<Sbibank/>}/>
      <Route path='/Availability' element={<Availabilty/>}/>
      <Route path='/Rooms_details' element={<Rooms_details/>}/>
      <Route path='/Mybookings' element={<Mybookings/>}/>
      <Route path='/Cancellations' element={<Cancellations/>}/>
      <Route path='/Adminreports' element={<Adminreports/>}/>
      <Route path='/Reportspayment' element={<Reportspayment/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path="/Premiumsuite" element={<Premiumsuite/>}/>
      <Route path="/Deluxesuite" element={<Deluxesuite/>}/>
      <Route path="/Classicdeluxe" element={<Classicdeluxe/>}/>
      <Route path="/Banquethalls" element={<Banquethalls/>}/>
      <Route path="/Seminarhalls" element={<Seminarhalls/>}/>
      <Route path="/Reports" element={<Reports/>}/>
      <Route path="/Restaurantreports" element={<Restaurantreports/>}/>
      <Route path="/Hotelreports" element={<Hotelreports/>}/>
      <Route path="/Restreports" element={<Restreports/>}/>
     

      <Route path='/Restaurant' element={<Restaurant/>}/>
      <Route path='/IndianMenu' element={<IndianMenu/>}/>
      <Route path='/ContinentalMenu' element={<ContinentalMenu/>}/>
      <Route path='/ChineaseMenu' element={<ChineaseMenu/>}/>
      <Route path='/MoghulaiMenu' element={<MoghulaiMenu/>}/>
      <Route path='/AddIndianBreakfast' element={<AddIndianBreakfast/>}/>
      <Route path='/AddIndianCurries' element={<AddIndianCurries/>}/>
      <Route path='/AddIndianSoups' element={<AddIndianSoups/>}/>
      <Route path='/AddIndianStarters' element={<AddIndianStarters/>}/>
      <Route path='/AddIndianMainCourse' element={<AddIndianMainCourse/>}/>
      <Route path='/AddIndianDesserts' element={<AddIndianDesserts/>}/>
      <Route path='/AddIndianDrinks' element={<AddIndianDrinks/>}/>
      <Route path='/UpdateIndianBreakfast/:customerId' element={<UpdateIndianBreakfast/>}/>
      <Route path='/UpdateIndianCurries/:customerId' element={<UpdateIndianCurries/>}/>
      <Route path='/UpdateIndianSoups/:customerId' element={<UpdateIndianSoups/>}/>
      <Route path='/UpdateIndianStarters/:customerId' element={<UpdateIndianStarters/>}/>
      <Route path='/UpdateIndianMainCourse/:customerId' element={<UpdateIndianMainCourse/>}/>
      <Route path='/UpdateIndianDesserts/:customerId' element={<UpdateIndianDesserts/>}/>
      <Route path='/UpdateIndianDrinks/:customerId' element={<UpdateIndianDrinks/>}/>
      <Route path='/AddContinentalBreakfast' element={<AddContinentalBreakfast/>}/>
      <Route path='/AddContinentalCurries' element={<AddContinentalCurries/>}/>
      <Route path='/AddContinentalSoups' element={<AddContinentalSoups/>}/>
      <Route path='/AddContinentalStarters' element={<AddContinentalStarters/>}/>
      <Route path='/AddContinentalMainCourse' element={<AddContinentalMainCourse/>}/>
      <Route path='/AddContinentalDesserts' element={<AddContinentalDesserts/>}/>
      <Route path='/AddContinentalDrinks' element={<AddContinentalDrinks/>}/>
      <Route path='/UpdateContinentalBreakfast/:customerId' element={<UpdateContinentalBreakfast/>}/>
      <Route path='/UpdateContinentalCurries/:customerId' element={<UpdateContinentalCurries/>}/>
      <Route path='/UpdateContinentalSoups/:customerId' element={<UpdateContinentalSoups/>}/>
      <Route path='/UpdateContinentalStarters/:customerId' element={<UpdateContinentalStarters/>}/>
      <Route path='/UpdateContinentalMainCourse/:customerId' element={<UpdateContinentalmainCourse/>}/>
      <Route path='/UpdateContinentalDesserts/:customerId' element={<UpdateContinentalDesserts/>}/>
      <Route path='/UpdateContinentalDrinks/:customerId' element={<UpdateContinentalDrinks/>}/>
      <Route path='/AddMoghulaiBreakfast' element={<AddMoghulaiBreakfast/>}/>
      <Route path='/AddMoghulaiCurries' element={<AddMoghulaiCurries/>}/>
      <Route path='/AddMoghulaiSoups' element={<AddMoghulaiSoups/>}/>
      <Route path='/AddMoghulaiStarters' element={<AddMoghulaiStarters/>}/>
      <Route path='/AddMoghulaiMainCourse' element={<AddMoghulaiMainCourse/>}/>
      <Route path='/AddMoghulaiDesserts' element={<AddMoghulaiDesserts/>}/>
      <Route path='/AddMoghulaiDrinks' element={<AddMoghulaiDrinks/>}/>
      <Route path='/UpdateMoghulaiBreakfast/:customerId' element={<UpdateMoghulaiBreakfast/>}/>
      <Route path='/UpdateMoghulaiCurries/:customerId' element={<UpdateMoghulaiCurries/>}/>
      <Route path='/UpdateMoghulaiSoups/:customerId' element={<UpdateMoghulaiSoups/>}/>
      <Route path='/UpdateMoghulaiStarters/:customerId' element={<UpdateMoghulaiStarters/>}/>
      <Route path='/UpdateMoghulaiMainCourse/:customerId' element={<UpdateMoghulaiMainCourse/>}/>
      <Route path='/UpdateMoghulaiDesserts/:customerId' element={<UpdateMoghulaiDesserts/>}/>
      <Route path='/UpdateMoghulaiDrinks/:customerId' element={<UpdateMoghulaiDrinks/>}/>
      <Route path='/AddChineaseBreakfast' element={<AddChineaseBreakfast/>}/>
      <Route path='/AddChineaseCurries' element={<AddChineaseCurries/>}/>
      <Route path='/AddChineaseSoups' element={<AddChineaseSoups/>}/>
      <Route path='/AddChineaseStarters' element={<AddChineaseStarters/>}/>
      <Route path='/AddChineaseMainCourse' element={<AddChineaseMainCourse/>}/>
      <Route path='/AddChineaseDesserts' element={<AddChineaseDesserts/>}/>
      <Route path='/AddChineaseDrinks' element={<AddChineaseDrinks/>}/>
      <Route path='/UpdateChineaseBreakfast/:customerId' element={<UpdateChineaseBreakfast/>}/>
      <Route path='/UpdateChineaseCurries/:customerId' element={<UpdateChineaseCurries/>}/>
      <Route path='/UpdateChineaseSoups/:customerId' element={<UpdateChineaseSoups/>}/>
      <Route path='/UpdateChineaseStarters/:customerId' element={<UpdateChineaseStarters/>}/>
      <Route path='/UpdateChineaseMainCourse/:customerId' element={<UpdateChineaseMainCourse/>}/>
      <Route path='/UpdateChineaseDesserts/:customerId' element={<UpdateChineaseDesserts/>}/>
      <Route path='/UpdateChineaseDrinks/:customerId' element={<UpdateChineaseDrinks/>}/>
      <Route path='/MS_indianmenu' element={<MS_indianmenu/>}/>
      <Route path='/MS_continentalmenu' element={<MS_continentalmenu/>}/>
      <Route path='/MS_chineasemenu' element={<MS_chineasemenu/>}/>
      <Route path='/MS_moghulaimenu' element={<MS_moghulaimenu/>}/>
      <Route path='/AddBreakfast' element={<AddBreakfast/>}/>
      <Route path='/AddCurries' element={<AddCurries/>}/>
      <Route path='/AddSoups' element={<AddSoups/>}/>
      <Route path='/AddStarters' element={<AddStarters/>}/>
      <Route path='/AddMainCourse' element={<AddMainCourse/>}/>
      <Route path='/AddDesserts' element={<AddDesserts/>}/>
      <Route path='/AddDrinks' element={<AddDrinks/>}/>
      <Route path='/UpdateBreakfast' element={<UpdateBreakfast/>}/>
      <Route path='/UpdateCurries' element={<UpdateCurries/>}/>
      <Route path='/UpdateSoups' element={<UpdateSoups/>}/>
      <Route path='/UpdateStarters' element={<UpdateStarters/>}/>
      <Route path='/UpdateMainCourse' element={<UpdateMainCourse/>}/>
      <Route path='/UpdateDesserts' element={<UpdateDesserts/>}/>
      <Route path='/UpdateDrinks' element={<UpdateDrinks/>}/>
      <Route path='/Restaurantmenu' element={<Restaurantmenu/>}/>

       <Route path='/Reportcomponent' element={<Reportcomponent/>}/>
        <Route path='/Servicescomponent' element={<Servicescomponent/>}/>
        <Route path='/Addservices' element={<Addservices/>}/>
        <Route path='/Editservices' element={<Editservices/>}/>
        <Route path='/Addcust' element={<Addcust/>}/>
        <Route path='/Area' element={<Area/>}/>
        <Route path='/Repostat' element={<Repostat/>}/>

        <Route path='/Food' element={<Food/>}/>
        <Route path='/V_chinese' element={<V_chinese/>}/>
        <Route path='/V_indian' element={<V_indian/>}/> 
        <Route path='/V_moghulai' element={<V_moghulai/>}/>
        <Route path='/V_continental' element={<V_continental/>}/>
      
        <Route path='/Orders' element={<Orders/>}/>
        <Route path="/Dinecart" element={<Dinecart/>}/> 
     <Route path="/Dinecard" element={<Dinecard/>}/> 
        <Route path='/Roomservice' element={<Roomservice/>}/>
        <Route path='/Takeaway' element={<Takeaway/>}/>
        <Route path='/Dineinn' element={<Dineinn/>}/>
        <Route path="/CartPage" element={<CartPage/>}/>

        <Route path='/Booknow' element={<Booknow/>}/>
        <Route path="/BookingHistory" element={<BookingHistory/>} />
        <Route path="/Editprofile" element={<Editprofile/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/PaymentForm" element={<PaymentForm/>}/>

    </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
