import { mdiSawBlade } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SawBlade(props: IconComponentProps) {
  return <Icon path={mdiSawBlade} {...props} />;
}

export { mdiSawBlade as path };
