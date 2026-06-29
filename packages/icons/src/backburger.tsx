import { mdiBackburger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Backburger(props: IconComponentProps) {
  return <Icon path={mdiBackburger} {...props} />;
}

export { mdiBackburger as path };
