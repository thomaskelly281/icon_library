import { mdiPandora } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pandora(props: IconComponentProps) {
  return <Icon path={mdiPandora} {...props} />;
}

export { mdiPandora as path };
