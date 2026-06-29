import { mdiSignal5g } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Signal5g(props: IconComponentProps) {
  return <Icon path={mdiSignal5g} {...props} />;
}

export { mdiSignal5g as path };
