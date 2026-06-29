import { mdiSignal4g } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Signal4g(props: IconComponentProps) {
  return <Icon path={mdiSignal4g} {...props} />;
}

export { mdiSignal4g as path };
