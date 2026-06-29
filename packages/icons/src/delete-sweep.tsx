import { mdiDeleteSweep } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteSweep(props: IconComponentProps) {
  return <Icon path={mdiDeleteSweep} {...props} />;
}

export { mdiDeleteSweep as path };
