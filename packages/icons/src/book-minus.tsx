import { mdiBookMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookMinus(props: IconComponentProps) {
  return <Icon path={mdiBookMinus} {...props} />;
}

export { mdiBookMinus as path };
