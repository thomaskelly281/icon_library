import { mdiBiohazard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Biohazard(props: IconComponentProps) {
  return <Icon path={mdiBiohazard} {...props} />;
}

export { mdiBiohazard as path };
