import { useEffect, useState } from "react";
import CustomerRegister from "./CustomerRegister";
import StoreRegister from "./StoreRegister";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 1000,
});

export default function LoginRegister() {
  const [customer, setCustomer] = useState("customerRegister");
  const [rolesData, setRolesData] = useState(null);
  useEffect(() => {
    instance
      .get("/roles")
      .then((res) => {
        setRolesData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="">
      <section className="max-w-[1200px] mx-auto py-5">
        {customer === "customerRegister" && (
          <CustomerRegister
            setCustomer={setCustomer}
            rolesData={rolesData}
            instance={instance}
          />
        )}
        {customer === "storeRegister" && (
          <StoreRegister
            setCustomer={setCustomer}
            rolesData={rolesData}
            instance={instance}
          />
        )}
      </section>
    </main>
  );
}