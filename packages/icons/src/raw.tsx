import { mdiRaw } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Raw(props: IconComponentProps) {
  return <Icon path={mdiRaw} {...props} />;
}

export { mdiRaw as path };
