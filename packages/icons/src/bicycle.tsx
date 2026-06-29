import { mdiBicycle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bicycle(props: IconComponentProps) {
  return <Icon path={mdiBicycle} {...props} />;
}

export { mdiBicycle as path };
