import { mdiCards } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cards(props: IconComponentProps) {
  return <Icon path={mdiCards} {...props} />;
}

export { mdiCards as path };
