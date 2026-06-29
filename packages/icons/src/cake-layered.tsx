import { mdiCakeLayered } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CakeLayered(props: IconComponentProps) {
  return <Icon path={mdiCakeLayered} {...props} />;
}

export { mdiCakeLayered as path };
