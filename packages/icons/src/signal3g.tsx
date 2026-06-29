import { mdiSignal3g } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Signal3g(props: IconComponentProps) {
  return <Icon path={mdiSignal3g} {...props} />;
}

export { mdiSignal3g as path };
