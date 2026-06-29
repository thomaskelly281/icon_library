import { mdiCarSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSettings(props: IconComponentProps) {
  return <Icon path={mdiCarSettings} {...props} />;
}

export { mdiCarSettings as path };
