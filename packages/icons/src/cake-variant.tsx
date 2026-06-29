import { mdiCakeVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CakeVariant(props: IconComponentProps) {
  return <Icon path={mdiCakeVariant} {...props} />;
}

export { mdiCakeVariant as path };
