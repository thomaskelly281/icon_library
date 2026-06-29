import { mdiSettingsHelper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SettingsHelper(props: IconComponentProps) {
  return <Icon path={mdiSettingsHelper} {...props} />;
}

export { mdiSettingsHelper as path };
