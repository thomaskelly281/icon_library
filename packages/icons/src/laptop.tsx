import { mdiLaptop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Laptop(props: IconComponentProps) {
  return <Icon path={mdiLaptop} {...props} />;
}

export { mdiLaptop as path };
