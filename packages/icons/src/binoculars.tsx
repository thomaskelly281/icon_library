import { mdiBinoculars } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Binoculars(props: IconComponentProps) {
  return <Icon path={mdiBinoculars} {...props} />;
}

export { mdiBinoculars as path };
