import { BeveragesProvider } from "./Beverages";
import { EventsProvider } from "./Events";

const Providers = ({ children }) => {
  return (
    <BeveragesProvider>
      <EventsProvider>{children}</EventsProvider>
    </BeveragesProvider>
  );
};

export default Providers;
