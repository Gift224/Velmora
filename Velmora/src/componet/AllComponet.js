

import Main from "./Main";

import PhoneList from "./PhoneList";
import ApplianceList from "./ApplianceList";
import ElectronicsList from "./ElectronicsList";
import FashionList from "./FashoinList";
import SupermarketsList from "./SupermarketList"
import BoostList from "./BoostList";


export default function AllComponet() {
  return (
    <>
      
      <Main />
      <BoostList />
      <PhoneList />
      <ApplianceList />
      <ElectronicsList />
      <FashionList />
      <SupermarketsList />
    </>
  );
}