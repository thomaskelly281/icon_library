import { mdiDataMatrixMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DataMatrixMinus(props: IconComponentProps) {
  return <Icon path={mdiDataMatrixMinus} {...props} />;
}

export { mdiDataMatrixMinus as path };
