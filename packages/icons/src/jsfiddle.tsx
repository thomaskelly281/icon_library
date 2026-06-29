import { mdiJsfiddle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Jsfiddle(props: IconComponentProps) {
  return <Icon path={mdiJsfiddle} {...props} />;
}

export { mdiJsfiddle as path };
