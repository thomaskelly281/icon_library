import { mdiTableSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableSettings(props: IconComponentProps) {
  return <Icon path={mdiTableSettings} {...props} />;
}

export { mdiTableSettings as path };
