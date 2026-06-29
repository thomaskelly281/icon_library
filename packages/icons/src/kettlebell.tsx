import { mdiKettlebell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kettlebell(props: IconComponentProps) {
  return <Icon path={mdiKettlebell} {...props} />;
}

export { mdiKettlebell as path };
