import { mdiSignal2g } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Signal2g(props: IconComponentProps) {
  return <Icon path={mdiSignal2g} {...props} />;
}

export { mdiSignal2g as path };
