import { mdiVectorPointPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPointPlus(props: IconComponentProps) {
  return <Icon path={mdiVectorPointPlus} {...props} />;
}

export { mdiVectorPointPlus as path };
