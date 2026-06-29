import { mdiVectorPolygon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPolygon(props: IconComponentProps) {
  return <Icon path={mdiVectorPolygon} {...props} />;
}

export { mdiVectorPolygon as path };
