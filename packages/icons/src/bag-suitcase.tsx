import { mdiBagSuitcase } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagSuitcase(props: IconComponentProps) {
  return <Icon path={mdiBagSuitcase} {...props} />;
}

export { mdiBagSuitcase as path };
