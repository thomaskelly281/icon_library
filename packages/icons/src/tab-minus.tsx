import { mdiTabMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TabMinus(props: IconComponentProps) {
  return <Icon path={mdiTabMinus} {...props} />;
}

export { mdiTabMinus as path };
