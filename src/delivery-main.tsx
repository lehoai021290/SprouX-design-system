import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { DeliveryPage } from "@/pages/delivery"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DeliveryPage />
  </StrictMode>
)
