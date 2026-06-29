import { mdiBat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bat(props: IconComponentProps) {
  return <Icon path={mdiBat} {...props} />;
}

export { mdiBat as path };
