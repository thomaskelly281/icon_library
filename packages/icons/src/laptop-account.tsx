import { mdiLaptopAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LaptopAccount(props: IconComponentProps) {
  return <Icon path={mdiLaptopAccount} {...props} />;
}

export { mdiLaptopAccount as path };
