import { mdiFilterSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterSettings(props: IconComponentProps) {
  return <Icon path={mdiFilterSettings} {...props} />;
}

export { mdiFilterSettings as path };
