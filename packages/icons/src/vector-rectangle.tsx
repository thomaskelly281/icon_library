import { mdiVectorRectangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorRectangle(props: IconComponentProps) {
  return <Icon path={mdiVectorRectangle} {...props} />;
}

export { mdiVectorRectangle as path };
