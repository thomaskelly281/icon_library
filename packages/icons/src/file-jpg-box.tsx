import { mdiFileJpgBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileJpgBox(props: IconComponentProps) {
  return <Icon path={mdiFileJpgBox} {...props} />;
}

export { mdiFileJpgBox as path };
