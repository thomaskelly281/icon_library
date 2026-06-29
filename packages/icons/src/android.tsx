import { mdiAndroid } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Android(props: IconComponentProps) {
  return <Icon path={mdiAndroid} {...props} />;
}

export { mdiAndroid as path };
