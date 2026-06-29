import { mdiMustache } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mustache(props: IconComponentProps) {
  return <Icon path={mdiMustache} {...props} />;
}

export { mdiMustache as path };
