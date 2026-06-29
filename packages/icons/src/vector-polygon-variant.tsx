import { mdiVectorPolygonVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPolygonVariant(props: IconComponentProps) {
  return <Icon path={mdiVectorPolygonVariant} {...props} />;
}

export { mdiVectorPolygonVariant as path };
