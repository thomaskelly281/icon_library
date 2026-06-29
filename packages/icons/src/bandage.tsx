import { mdiBandage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bandage(props: IconComponentProps) {
  return <Icon path={mdiBandage} {...props} />;
}

export { mdiBandage as path };
