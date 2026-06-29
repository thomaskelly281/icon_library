import { mdiExportVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ExportVariant(props: IconComponentProps) {
  return <Icon path={mdiExportVariant} {...props} />;
}

export { mdiExportVariant as path };
