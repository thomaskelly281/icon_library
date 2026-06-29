import { mdiStoreCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreCog(props: IconComponentProps) {
  return <Icon path={mdiStoreCog} {...props} />;
}

export { mdiStoreCog as path };
