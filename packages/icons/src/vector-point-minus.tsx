import { mdiVectorPointMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPointMinus(props: IconComponentProps) {
  return <Icon path={mdiVectorPointMinus} {...props} />;
}

export { mdiVectorPointMinus as path };
