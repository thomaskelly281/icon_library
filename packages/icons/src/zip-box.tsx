import { mdiZipBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZipBox(props: IconComponentProps) {
  return <Icon path={mdiZipBox} {...props} />;
}

export { mdiZipBox as path };
